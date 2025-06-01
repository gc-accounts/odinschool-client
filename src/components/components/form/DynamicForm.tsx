'use client';

import { useForm, useWatch } from 'react-hook-form';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue
} from '@/components/components/ui/select';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/components/ui/form';
import { useEffect } from 'react';

export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea';
  required?: boolean;
  options?: string[];
  rules?: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

interface DynamicFormProps {
  fields: FieldConfig[];
  initialValues?: { [key: string]: any };
  buttonText: String;
  onSubmit: (data: any, reset: () => void) => void;
}

const DynamicForm = ({ fields, initialValues = {}, buttonText, onSubmit }: DynamicFormProps) => {
  // Extend initialValues with all field names set to '' if missing
  const extendedDefaults = fields.reduce((acc, field) => {
    acc[field.name] = initialValues[field.name] ?? '';
    return acc;
  }, {} as Record<string, any>);

  const form = useForm({
    defaultValues: extendedDefaults,
  });

  const { reset, control, register, handleSubmit, setValue } = form;

  const handleFormSubmit = (data: any) => {
    onSubmit(data, () => {
      reset(extendedDefaults);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="flex gap-4">
          {fields.slice(0, 2).map((field) => (
            <FormField
              key={field.name}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({ field: formField }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xs">{field.label}</FormLabel>
                  <FormControl>
                    <Input {...formField} className="focus:outline-none focus:border-primary-500" />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          ))}
        </div>

        {fields.slice(2).map((field) => {
          if (field.type === 'hidden') {
            return <input key={field.name} type="hidden" {...register(field.name)} />;
          }

          if (field.type === 'select') {
            const selectedValue = useWatch({ control, name: field.name });

            return (
              <FormField
                key={field.name}
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="text-xs">{field.label}</FormLabel>
                    <Select value={selectedValue} onValueChange={(val) => setValue(field.name, val)}>
                      <FormControl>
                        <SelectTrigger className="focus:outline-none focus:border-primary-500">
                          <SelectValue placeholder={`Select ${field.label}`} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="text-xs">{field.label}</FormLabel>
                    <FormControl>
                      <textarea
                        {...formField}
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
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="text-xs">{field.label}</FormLabel>
                  <FormControl>
                    <Input {...formField} className="focus:outline-none focus:border-primary-500" />
                  </FormControl>
                  <FormMessage className="font-medium text-xs" />
                </FormItem>
              )}
            />
          );
        })}

        <Button type="submit" className="w-full mt-6">
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default DynamicForm;
