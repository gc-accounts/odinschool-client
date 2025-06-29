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
import React from 'react';

export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea';
  required?: boolean;
  options?: string[];
  rules?: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: { value: number; message: string } | number; message?: string }; // Added message to maxLength value
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => boolean | string;
  };
  defaultValue?: string;
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
  const extendedDefaults = fields.reduce((acc, field) => {
    acc[field.name] = initialValues[field.name] ?? field.defaultValue ?? '';
    return acc;
  }, {} as Record<string, any>);

  const form = useForm({ defaultValues: extendedDefaults });
  const {
    reset,
    control,
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    getValues
  } = form;

  const watchedCountryCodeOption = useWatch({
    control,
    name: 'countryCode',
    defaultValue: extendedDefaults.countryCode,
  });

  const phoneInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const currentPhoneValue = getValues('phone');
    const phoneFieldConfig = fields.find(field => field.name === 'phone');

    // Only set focus if the phone field is explicitly present in the form configuration
    // AND it's currently empty, AND the current focus isn't already on the phone field.
    if (phoneInputRef.current && phoneFieldConfig && !currentPhoneValue && document.activeElement !== phoneInputRef.current) {
        // We no longer automatically focus on load. This useEffect will primarily
        // ensure cursor position if the user explicitly clicks into an empty field
        // or if country code changes with an empty phone field.
        // To prevent initial focus, we remove the direct focus call here.
        // The onFocus handler will handle cursor positioning when the user interacts.
    }
  }, [watchedCountryCodeOption, getValues, fields]); // Include fields in dependency array for robustness

  const phonePrefix = watchedCountryCodeOption ? watchedCountryCodeOption.split(' ')[0] : '';
  const formattedPhonePrefix = phonePrefix.startsWith('+') ? phonePrefix : `+${phonePrefix}`;

  const handleFormSubmit = async (data: any) => {
    await onSubmit(data, () => reset(extendedDefaults));
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          {fields.filter(field => field.name === 'firstName' || field.name === 'lastName').map((field) => (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: f }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...f}
                      placeholder={field.label}
                      className="focus:outline-none focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>

        {/* Email Field */}
        {fields.filter(field => field.name === 'email').map((field) => (
          <FormField
            key={field.name}
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: f }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...f}
                    placeholder={field.label}
                    className="focus:outline-none focus:border-primary-500"
                  />
                </FormControl>
                <FormMessage className="font-medium text-xs" />
              </FormItem>
            )}
          />
        ))}

        {/* Country Code and Phone Number (combined visually) */}
        <div className="flex gap-4">
          {/* Country Code Select */}
          {fields.filter(field => field.name === 'countryCode').map((field) => {
            const selectValue = useWatch({ control, name: field.name });
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={() => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Select
                        value={selectValue}
                        onValueChange={(val) => setValue(field.name, val)}
                      >
                        <SelectTrigger className="focus:outline-none focus:border-primary-500">
                          {selectValue ? (
                            <SelectValue>{selectValue}</SelectValue>
                          ) : (
                            <SelectValue placeholder={field.label ? `Select ${field.label}` : ''} />
                          )}
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
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          })}
          {/* Phone Number Input with dynamic prefix and conditional validation */}
          {fields.filter(field => field.name === 'phone').map((field) => {
            // Determine validation rules based on selected country code
            const phoneRules = { ...field.rules }; // Start with base rules

            if (formattedPhonePrefix === '+91') {
              // For India (+91), validation should be exactly 10 digits
              phoneRules.minLength = {
                value: 10,
                message: 'Phone number must be exactly 10 digits long for India',
              };
              phoneRules.maxLength = {
                value: 10,
                message: 'Phone number must be exactly 10 digits long for India',
              };
            } else {
              // For other countries, use the original min/max length from field.rules
              // Ensure these are explicitly set if not coming from field.rules defaults.
              phoneRules.minLength = field.rules?.minLength || { value: 8, message: 'Phone number must be at least 8 digits long' };
              phoneRules.maxLength = field.rules?.maxLength || { value: 12, message: 'Phone number cannot exceed 12 digits' };
            }

            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                // Apply the dynamically determined rules
                rules={phoneRules}
                render={({ field: f }) => (
                  <FormItem className="w-2/3">
                    <FormControl>
                      <Input
                        {...f}
                        ref={phoneInputRef}
                        // Only prepend prefix if the field is empty or starts with prefix
                        value={f.value ? (f.value.startsWith(formattedPhonePrefix) ? f.value : formattedPhonePrefix + f.value) : formattedPhonePrefix}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          let cleanValue = inputValue;

                          if (inputValue.startsWith(formattedPhonePrefix)) {
                            cleanValue = inputValue.substring(formattedPhonePrefix.length);
                          }
                          // Ensure only digits are kept after removing prefix
                          cleanValue = cleanValue.replace(/[^0-9]/g, '');
                          f.onChange(cleanValue);
                        }}
                        onFocus={(e) => {
                          // Only set selection range if the value is just the prefix or empty
                          if (e.target.value === formattedPhonePrefix || !f.value) {
                            e.target.setSelectionRange(formattedPhonePrefix.length, formattedPhonePrefix.length);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' || e.key === 'Delete') {
                            const selectionStart = e.currentTarget.selectionStart;
                            // Prevent deleting the prefix
                            if (selectionStart !== null && selectionStart <= formattedPhonePrefix.length) {
                              e.preventDefault();
                            }
                          }
                        }}
                        placeholder={field.label}
                        className="focus:outline-none focus:border-primary-500"
                      />
                    </FormControl>
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          })}
        </div>

        {/* Other fields */}
        {fields.filter(field => !['firstName', 'lastName', 'email', 'countryCode', 'phone'].includes(field.name)).map((field) => {
          if (field.type === 'hidden') {
            return <input key={field.name} type="hidden" {...register(field.name)} />;
          }
          if (field.type === 'select') {
            const value = useWatch({ control, name: field.name });
            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={() => (
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
                    <FormMessage className="font-medium text-xs" />
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
                render={({ field: f }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        {...f}
                        placeholder={field.label}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 text-sm"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage className="font-medium text-xs" />
                  </FormItem>
                )}
              />
            );
          }
          return (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: f }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...f}
                      placeholder={field.label}
                      className="focus:outline-none focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          );
        })}

        <p className='text-xs text-gray-600 px-2'>By providing your contact details, you agree to our <a href='/privacy-policy' className='text-primary-600' target='_blank'>Privacy Policy</a></p>
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