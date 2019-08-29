import React, { useLayoutEffect, useState, FunctionComponent } from "react";

const styles = require("./Table.module.scss");

interface TableProps {
  border?: boolean;
  borderless?: boolean;
  hover?: boolean;
}

/**
 * @visibleName Tables
 * @version 1.0.0
 * @author [Rankmi](https://github.com/Rankmi)
 */

const Table: FunctionComponent<TableProps> = ({
  children,
  border = false,
  borderless = false,
  hover = false
}) => {
  const [classNames, setClassNames] = useState("");
  const [tableBorder, setTableBorder] = useState(border);
  const [tableBorderless, setTableBorderless] = useState(borderless);
  const [tableHover, setTableHover] = useState(hover);

  useLayoutEffect(() => {
    setTableBorder(tableBorder ? styles[`tableBorder`] : false);
  }, [tableBorder]);

  useLayoutEffect(() => {
    setTableBorderless(tableBorderless ? styles[`tableBorderless`] : false);
  }, [tableBorderless]);

  useLayoutEffect(() => {
    setTableHover(tableHover ? styles[`tableHover`] : false);
  }, [tableHover]);

  useLayoutEffect(() => {
    setClassNames(
      [styles.table, tableBorder, tableBorderless, tableHover]
        .filter(item => item)
        .join(" ")
    );
  }, [tableBorder, tableBorderless, tableHover]);

  return (
    <div className={styles.tableContainer}>
      <table className={classNames}>{children}</table>
    </div>
  );
};

export default Table;
