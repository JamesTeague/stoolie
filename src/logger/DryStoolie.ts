
import { ILogger, LoggerFields } from './Logger';

export class DryStoolie implements ILogger {
  withFields(fields: LoggerFields): DryStoolie {
    return this;
  }

  withField(key: string, value: any): DryStoolie {
    return this;
  }

  withError(err: Error): DryStoolie {
    return this;
  }

  withType(type: string): DryStoolie {
    return this
  }

  withCategory(category: string): DryStoolie {
    return this;
  }

  silly(message: string): DryStoolie {
    return this;
  }

  debug(message: string): DryStoolie {
    return this;
  }

  verbose(message: string): DryStoolie {
    return this;
  }

  info(message: string): DryStoolie {
    return this;
  }

  warn(message: string): DryStoolie {
    return this;
  }

  error(message: string): DryStoolie {
    return this;
  }
}
