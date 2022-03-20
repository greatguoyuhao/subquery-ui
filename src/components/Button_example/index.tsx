import { FC, Fragment } from "react";
import { Button as AntButton } from "antd";
import { NativeButtonProps } from "antd/lib/button/button.d";

import styles from "./styles.module.less";
import cx from "classnames";

export interface IProps extends NativeButtonProps {
  radius?: boolean;
}

export const Button: FC<IProps> = ({ children, radius = false, ...other }) => {
  return (
    <AntButton {...other} className={cx({ [styles.radius]: radius })}>
      {children}
    </AntButton>
  );
};
