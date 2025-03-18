import { Lusitana } from 'next/font/google';

// Define the Lusitana font with custom options
export const lusitana = Lusitana({
  weight: ['400', '700'], // Regular and Bold weights
  subsets: ['latin'],     // Latin character subset
  display: 'swap',        // Use 'swap' to ensure text remains visible during font loading
  variable: '--font-lusitana', // CSS variable name
});