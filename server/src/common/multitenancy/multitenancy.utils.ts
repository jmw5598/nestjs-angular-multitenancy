export const extractSubdomainFromRequest = (req: any): string => {  
  return req?.headers?.host?.split(':')[0].split('.')[0] || null;
}
