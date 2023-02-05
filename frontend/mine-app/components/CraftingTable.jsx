import { useState, useEffect } from "react";

export function CraftingTable() {
  const [inShape, setInshape] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const arr = [
    [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
      null,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
    ],
    [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
    ],
    [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4y31TMQ4CMQzzg9iZ7wFILMxIt/ABZiZ2FsSGeMKtzHysyJVcGRMYfGmTqImdHJ7XfVsuu0b7us9f+Oe/HacGHvQIQefjvBmPZlx35hCoEmWVJOQjvQN+TvO6g2fdD9tVh2I6u58W4sgKyTN9ToUx3j8oKCDreiRV5cP5eQUJWgnpuiC5pgYZzxz4nL1KNfvUo3fgo8t2c4RupREqdavZZ3x04ByrPfCY74QAzTu1UIVqLzwXv3Y82801F+CJ+R/4HlT6DA2Sm+vhmlT78QZ+7nLGaC/6FAAAAABJRU5ErkJggg==",
    ],
  ];

  const emptySquare = (
    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
  );

  const addToArray = (arr, remaining) => {
    arr.push(0);

    return arr;
  };

  return (
    <>
      <div className="crafting-table d-flex flex-wrap">
        {addToArray(arr).map((arr, idx) => {
          if (Array.isArray(arr)) {
            if (arr.length == 1) {
              return (
                <>
                  {arr[0] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[0]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                </>
              );
            } else if (arr.length == 2) {
              return (
                <>
                  {arr[0] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[0]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}

                  {arr[1] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[1]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                </>
              );
            } else if (arr.length == 3) {
              return (
                <>
                  {arr[0] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[0]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}
                  {arr[1] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[1]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}
                  {arr[2] !== null ? (
                    <div className="iventory-bg d-flex justify-content-center align-items-center">
                      <img className="item-img" src={arr[2]} />
                    </div>
                  ) : (
                    <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  )}
                </>
              );
            }
          } else {
            if (idx == 1) {
              return (
                <>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                </>
              );
            } else if (idx == 2) {
              return (
                <>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                  <div className="iventory-bg d-flex justify-content-center align-items-center"></div>
                </>
              );
            }
          }
        })}
      </div>
    </>
  );
}
