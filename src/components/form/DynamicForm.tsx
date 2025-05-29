'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue
} from '@/components/ui/select';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';

export interface FieldConfig {
  name: string;
  label?: string;
  type: 'text' | 'select' | 'hidden' | 'textarea'; // ✅ added textarea
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
  onSubmit: (data: any) => void;
}

const DynamicForm = ({ fields, initialValues = {}, buttonText, onSubmit }: DynamicFormProps) => {
  if (!Array.isArray(fields) || fields.length === 0) {
    return <div className="text-red-500">Error: Form fields not provided.</div>;
  }

  const form = useForm({
    defaultValues: initialValues || {},
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          {fields.slice(0, 2).map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              rules={field.rules}
              render={({ field: formField }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xs">{field.label}</FormLabel>
                  <FormControl>
                    <Input {...formField} className="focus:outline-none focus:border-primary-500" />
                  </FormControl>
                  <FormMessage className='font-medium text-xs' />
                </FormItem>
              )}
            />
          ))}
        </div>

        {fields.slice(2).map((field) => {
          if (field.type === 'hidden') {
            return <input key={field.name} type="hidden" {...form.register(field.name)} />;
          }

          if (field.type === 'select') {
            return (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                rules={field.rules}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="text-xs">{field.label}</FormLabel>
                    <Select onValueChange={formField.onChange} defaultValue={formField.value}>
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
                    <FormMessage className='font-medium text-xs' />
                  </FormItem>
                )}
              />
            );
          }
          if (field.type === 'textarea') {
            return (
              <FormField
                key={field.name}
                control={form.control}
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
              control={form.control}
              name={field.name}
              rules={field.rules}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="text-xs">{field.label}</FormLabel>
                  <FormControl>
                    <Input {...formField} className="focus:outline-none focus:border-primary-500" />
                  </FormControl>
                  <FormMessage className='font-medium text-xs' />
                </FormItem>
              )}
            />
          );
        })}

        <Button type="submit" className="w-full" style={{ marginTop: "1.5rem" }}>
          {buttonText ? buttonText : 'Request  Callback'}
        </Button>
      </form>
    </Form>
  );
};

export default DynamicForm;






