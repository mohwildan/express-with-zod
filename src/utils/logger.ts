import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  level: "info",
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
