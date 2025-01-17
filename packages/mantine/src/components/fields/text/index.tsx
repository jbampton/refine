import React, { ReactNode } from "react";

import { RefineFieldTextProps } from "@pankod/refine-ui-types";
import { Text, TextProps } from "@mantine/core";

export type TextFieldProps = RefineFieldTextProps<ReactNode, TextProps>;

/**
 * This field lets you show basic text. It uses Mantine {@link https://mantine.dev/core/text/  `<Text>`} component.
 *
 * @see {@link https://refine.dev/docs/api-reference/mantine/components/fields/text} for more details.
 */
export const TextField: React.FC<TextFieldProps> = ({ value, ...rest }) => {
    return <Text {...rest}>{value}</Text>;
};
