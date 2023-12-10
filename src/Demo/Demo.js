import React, { useMemo} from "react";
import classes from "./Demo.module.css";

const Demo = (props) => {

  useMemo(()=>{if (props.order) {
    console.log("Items sorted in descending");
    props.items.sort((a, b) => b - a);
  } else {
    console.log("Items sorted in ascending");
    props.items.sort((a, b) => a - b);
  }
},[props.order, props.items])

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Demo);
