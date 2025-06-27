'use client';

import { useForm, useWatch } from 'react-hook-form';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const countryCodes = [
  { label: "India (+91)", value: "91", country: "India" },
  { label: "United States (+1)", value: "1", country: "United States" },
  { label: "United Kingdom (+44)", value: "44", country: "United Kingdom" },
  { label: "United Arab Emirates (+971)", value: "971", country: "United Arab Emirates" },
];

export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea' | 'phone';
  required?: boolean;
  options?: string[];
  rules?: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => boolean | string;
  };
}

interface DynamicFormProps {
  fields: FieldConfig[];
  initialValues?: { [key: string]: any };
  buttonText: string;
  onSubmit: (data: any, reset: () => void) => Promise<void>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues = {},
  buttonText,
  onSubmit,
}) => {
  const hasPhoneField = fields.some(field => field.type === 'phone');
  
  const extendedDefaults = fields.reduce((acc, field) => {
    acc[field.name] = initialValues[field.name] ?? '';
    return acc;
  }, {} as Record<string, any>);

  const form = useForm({ 
    defaultValues: extendedDefaults,
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { isSubmitting, errors },
  } = form;

  const [selectedCountryCode, setSelectedCountryCode] = useState('91');
  const phoneValue = hasPhoneField ? watch('phone') || '' : '';

  const validatePhoneNumber = (value: string) => {
    if (!value) return 'Phone number is required';
    
    const digits = value.replace(`+${selectedCountryCode}`, '').replace(/\D/g, '');
    
    if (selectedCountryCode === '91') {
      if (digits.length !== 10) return 'Indian phone number must be exactly 10 digits';
    } else {
      if (digits.length < 7) return 'Phone number must be at least 7 digits';
      if (digits.length > 12) return 'Phone number must be at most 12 digits';
    }
    
    return true;
  };

  useEffect(() => {
    if (hasPhoneField) {
      if (phoneValue) {
        const digits = phoneValue.replace(/^\+\d+\s?/, '');
        setValue('phone', `+${selectedCountryCode}${digits ? ` ${digits}` : ''}`);
      } else {
        setValue('phone', `+${selectedCountryCode}`);
      }
      trigger('phone');
    }
  }, [hasPhoneField, selectedCountryCode, setValue, trigger, phoneValue]);

  const handleFormSubmit = async (data: any) => {
    const isValid = await trigger();
    if (!isValid) return;

    if (hasPhoneField) {
      data.phone = data.phone.replace(/\s/g, '');
    }
    await onSubmit(data, () => reset(extendedDefaults));
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {fields.map((field, index) => {
          if (field.type === 'hidden') {
            return <input key={field.name} type="hidden" {...register(field.name)} />;
          }

          if (field.type === 'phone') {
            return (
              <div key={field.name} className="flex gap-3">
                <Select
                  value={selectedCountryCode}
                  onValueChange={(value) => {
                    setSelectedCountryCode(value);
                    trigger(field.name);
                  }}
                >
                  <SelectTrigger className="w-fit focus:outline-none focus:border-primary-500">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormField
                  control={control}
                  name={field.name}
                  rules={{
                    required: 'Phone number is required',
                    validate: validatePhoneNumber
                  }}
                  render={({ field: f, fieldState }) => {
                    const displayValue = f.value?.replace(`+${selectedCountryCode}`, '').replace(/\D/g, '') || '';
                    return (
                      <FormItem className="flex-1">
                        <FormControl>
                          <div className="relative">
                            <div className="absolute left-3 top-2.5 text-sm">+{selectedCountryCode}</div>
                            <Input
                              type="tel"
                              placeholder={selectedCountryCode === '91' ? '9876543210' : 'Phone number'}
                              className="pl-14 focus:outline-none focus:border-primary-500"
                              value={displayValue}
                              onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, '');
                                f.onChange(`+${selectedCountryCode} ${digits}`);
                              }}
                              onBlur={() => {
                                f.onBlur();
                                trigger(field.name);
                              }}
                            />
                          </div>
                        </FormControl>
                        {(fieldState.isTouched || errors[field.name]) && fieldState.error && (
                          <FormMessage className="font-medium text-xs text-red-500">
                            {fieldState.error.message}
                          </FormMessage>
                        )}
                      </FormItem>
                    );
                  }}
                />
              </div>
            );
          }

          if (field.type === 'text') {
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: f, fieldState }) => (
                  <FormItem className={index < 2 ? 'w-full' : ''}>
                    <FormControl>
                      <Input
                        {...f}
                        placeholder={field.label}
                        className="focus:outline-none focus:border-primary-500"
                      />
                    </FormControl>
                    {(fieldState.isTouched || errors[field.name]) && fieldState.error && (
                      <FormMessage className="font-medium text-xs text-red-500" />
                    )}
                  </FormItem>
                )}
              />
            );
          }

          if (field.type === 'select') {
            const value = useWatch({ control, name: field.name });
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        value={value}
                        onValueChange={(val) => setValue(field.name, val)}
                      >
                        <SelectTrigger className="focus:outline-none focus:border-primary-500">
                          <SelectValue placeholder={field.label ? `Select ${field.label}` : ''} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    {(fieldState.isTouched || errors[field.name]) && fieldState.error && (
                      <FormMessage className="font-medium text-xs text-red-500" />
                    )}
                  </FormItem>
                )}
              />
            );
          }

          if (field.type === 'textarea') {
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: f, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        {...f}
                        placeholder={field.label}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 text-sm"
                        rows={4}
                      />
                    </FormControl>
                    {(fieldState.isTouched || errors[field.name]) && fieldState.error && (
                      <FormMessage className="font-medium text-xs text-red-500" />
                    )}
                  </FormItem>
                )}
              />
            );
          }

          return null;
        })}

        <p className='text-xs text-gray-600 px-2'>
          By providing your contact details, you agree to our{' '}
          <a href='/privacy-policy' className='text-primary-600' target='_blank'>Privacy Policy</a>
        </p>
        <Button
          type="submit"
          variant="yellow"
          disabled={isSubmitting}
          className="w-full mt-6 flex items-center justify-center"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Submitting...' : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default DynamicForm;