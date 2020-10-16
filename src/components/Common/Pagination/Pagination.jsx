import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={styles.pagination}>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
                     key={p.id}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}>{p}</span>
      })}
    </div>
  )
}

export default Pagination;