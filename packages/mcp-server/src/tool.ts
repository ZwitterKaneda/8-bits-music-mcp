import { z } from 'zod';

export interface Tool {
  name: string;
  description: string;
  inputSchema: z.ZodSchema<any>;
  execute: (args: any) => Promise<{
    success: boolean;
    message: string;
    data?: any;
    error?: string;
  }>;
}