const isProduction = (env: any) => {
  return env.NODE_ENV === 'production';
};

export { isProduction };
