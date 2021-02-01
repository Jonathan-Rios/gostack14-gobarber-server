interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'jonathan.riosousa2@gmail.com',
      name: 'Jonathan Rios Sousa',
    },
  },
} as IMailConfig;
