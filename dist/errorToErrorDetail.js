import { isDefined } from "@mjt-engine/object";
import { errorToText } from "./errorToText";
export const errorToErrorDetail = ({ error, extra, stack, }) => {
    if (error instanceof Error) {
        const cause = isDefined(error.cause)
            ? errorToErrorDetail({ error: error.cause })
            : undefined;
        return {
            message: error.message,
            stack: error.stack ?? stack,
            extra,
            cause,
        };
    }
    return {
        message: errorToText(error),
        stack,
        extra,
    };
};
//# sourceMappingURL=errorToErrorDetail.js.map