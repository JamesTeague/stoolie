import tripleBeam from 'triple-beam';
import { format } from 'winston';

export default function getProdFormat() {
  const colorizer = format.colorize();

  return format.combine(
    format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    format.printf(info => {
      const { app, category, message, timestamp, ...rest } = info;

      const level = info.level.substr(0, 5).padEnd(5);

      const moniker = `${colorizer.colorize(
        info[tripleBeam.LEVEL],
        level
      )} ${timestamp.toString()} - [${app}${category ? ` (${category})` : ''}]`;
      const fields = Object.keys(rest).reduce(
        (acc, k) =>
          `${acc}   ${colorizer.colorize(
            info[tripleBeam.LEVEL],
            k
          )}=${JSON.stringify(rest[k])}`,
        ''
      );

      return `${`${moniker} ${message}`.padEnd(116)} ${fields}`;
    })
  );
}
