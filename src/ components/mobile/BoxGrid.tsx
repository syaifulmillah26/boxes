type Box = {
  id: string;
  className: string;
  color: string;
};

type BoxGridProps = {
  boxData: Box[];
  shuffleColors: () => void;
};

export const BoxGrid = ({ boxData, shuffleColors }: BoxGridProps) => {
  return (
    <>
      <div className="box-grid-mobile">
        <div className="row">
          <div className="col-12">
            {boxData.slice(0, 1).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">1</div>
              </div>
            ))}
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                {boxData.slice(2, 3).map((box) => (
                  <div
                    key={box.id}
                    className={box.className}
                    style={{ backgroundColor: box.color }}
                    onClick={shuffleColors}
                  >
                    <div className="title">3</div>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {boxData.slice(3, 4).map((box) => (
                  <div
                    key={box.id}
                    className={box.className}
                    style={{ backgroundColor: box.color }}
                    onClick={shuffleColors}
                  >
                    <div className="title">4</div>
                  </div>
                ))}
              </div>
            </div>
            {boxData.slice(1, 2).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">2</div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {boxData.slice(6, 7).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">7</div>
              </div>
            ))}
          </div>
          <div className="col-6">
            {boxData.slice(4, 5).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">5</div>
              </div>
            ))}
            {boxData.slice(5, 6).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">6</div>
              </div>
            ))}
          </div>
          <div className="col-6">
            {boxData.slice(7, 8).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">8</div>
              </div>
            ))}
            {boxData.slice(8, 9).map((box) => (
              <div
                key={box.id}
                className={box.className}
                style={{ backgroundColor: box.color }}
                onClick={shuffleColors}
              >
                <div className="title">9</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
