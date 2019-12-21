const isProduction = (env: any) => {
  return env.NODE_ENV.toLowerCase() === 'production';
};

export { isProduction };
