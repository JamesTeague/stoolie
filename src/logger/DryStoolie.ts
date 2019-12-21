import { ILogger } from './Logger';

export default class DryStoolie implements ILogger {
  withFields(): DryStoolie {
    return this;
  }

  withField(): DryStoolie {
    return this;
  }

  public withError(): DryStoolie {
    return this;
  }

  withType(): DryStoolie {
    return this;
  }

  withCategory(): DryStoolie {
    return this;
  }

  silly(): DryStoolie {
    return this;
  }

  debug(): DryStoolie {
    return this;
  }

  verbose(): DryStoolie {
    return this;
  }

  info(): DryStoolie {
    return this;
  }

  warn(): DryStoolie {
    return this;
  }

  error(): DryStoolie {
    return this;
  }
}
