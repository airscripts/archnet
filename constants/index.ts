import { MY_IP_API } from "./ip";
import { IP, CLS, EXIT } from "./commands";

export default {
  ip: { ipApi: MY_IP_API },
  commands: { ip: IP, cls: CLS, exit: EXIT },
};