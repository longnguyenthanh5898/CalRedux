import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CAL_KEY } from "../Redux/Actions/actionReducer";
// import { calReducer } from "../Redux/Actions/actionReducer";
import {
  calAnswer,
  calBackSpace,
  calClear,
  calButton,
} from "../Redux/Actions/actions";

const CalApp = () => {
  const dispatch = useDispatch();
  //   const viewNumCal = useSelector((state) => state.num);
  //   const viewAnsCal = useSelector((state) => state.ans);
  const viewCal = useSelector((state) => state[CAL_KEY]);

  return (
    <React.Fragment>
      <section>
        <div className="w-96 bg-slate-400 h-screen mx-auto mt-8 mb-9">
          <div className="text-4xl w-full h-16 font-bold text-dark-900 flex justify-center pt-4">
            CALCULATOR
          </div>
          <div className="h-20 border-slate-900 border-2 ">
            <input
              placeholder="0"
              className="h-full w-full font-bold text-3xl text-right pr-2"
              //   value={viewAnsCal === 0 ? viewNumCal : viewAnsCal}
              value={viewCal.ans.length === 0 ? viewCal.num : viewCal.ans}
            />
          </div>
          <div className="grid grid-cols-4  gap-4 mt-10 mx-3">
            <button
              onClick={() => dispatch(calClear())}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              AC
            </button>
            <button
              onClick={() => dispatch(calBackSpace())}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              C
            </button>
            <button
              onClick={() => dispatch(calButton("/"))}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              /
            </button>
            <button
              onClick={() => dispatch(calButton("+"))}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              +
            </button>

            <button
              onClick={() => dispatch(calButton(7))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              7
            </button>
            <button
              onClick={() => dispatch(calButton(8))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              8
            </button>
            <button
              onClick={() => dispatch(calButton(9))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              9
            </button>
            <button
              onClick={() => dispatch(calButton("-"))}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              -
            </button>
            <button
              onClick={() => dispatch(calButton(4))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              4
            </button>
            <button
              onClick={() => dispatch(calButton(5))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              5
            </button>
            <button
              onClick={() => dispatch(calButton(6))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              6
            </button>

            <button
              onClick={() => dispatch(calButton("*"))}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              *
            </button>

            <button
              onClick={() => dispatch(calButton(1))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              1
            </button>
            <button
              onClick={() => dispatch(calButton(2))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              2
            </button>
            <button
              onClick={() => dispatch(calButton(3))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              3
            </button>

            <button
              onClick={() => dispatch(calButton("."))}
              className="text-slate w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              .
            </button>
            <button
              onClick={() => dispatch(calButton(0))}
              className="text-white w-20 h-20 bg-slate-800 rounded-lg font-bold text-3xl"
            >
              0
            </button>
            <button
              onClick={() => dispatch(calAnswer())}
              className="text-slate w-60 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalApp;
