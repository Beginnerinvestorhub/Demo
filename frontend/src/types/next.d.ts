/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module 'next' {
  export interface NextApiRequest {
    user?: {
      id: string;
      email?: string;
      role?: string;
    };
  }
}

