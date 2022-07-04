import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  // verification of number
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className={styles.counter}>

      <p className={styles.mainCount}>{count}</p>

      <div>
        <button
          className={styles.primaryBtn}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <p className={styles.description}>
        You can choose account that you want to add.
      </p>

      <input
        type="text"
        className={styles.inputNum}
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button
          className={styles.secondaryBtn}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className={styles.secondaryBtn} onClick={resetAll}>
          Reset
        </button>
      </div>
    </div>
  );
}
