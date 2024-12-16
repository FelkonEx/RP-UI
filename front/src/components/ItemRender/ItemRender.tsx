import "./ItemRender.css";

type ItemRenderProps = {
  heroImage: string | undefined;
  unitName: string | undefined;
  unitStyleName: string | undefined;
  checkInDate: string | undefined;
};

const IMAGE_HEIGHT: number = 360;
const IMAGE_WIDTH: number = 480;

const generateImageURL = (heroImage?: string) => {
  if (!heroImage) {
    return "";
  }

  return (
    "https://cms.inspirato.com/ImageGen.ashx?image=" +
    heroImage +
    "&height=" +
    IMAGE_HEIGHT +
    "&width=" +
    IMAGE_WIDTH
  );
};

const renderDate = (date: string) => {
  if (!date) {
    return "";
  }
  const dateObject = new Date(date);
  return `${dateObject.getDate()} - ${dateObject.getMonth()} - ${dateObject.getFullYear()}`;
};

export default function ItemRender({
  heroImage,
  unitName,
  unitStyleName,
  checkInDate,
}: ItemRenderProps) {
  return (
    <div
      className="item-render-container"
      style={{
        width: IMAGE_WIDTH,
      }}
    >
      <img src={generateImageURL(heroImage)} alt={unitName} />
      <div className="item-info-headings">
        {unitName && <span className="left">{unitName}</span>}
        <br />
        {unitStyleName && <span className="right">Style: {unitStyleName}</span>}
      </div>
      <div className="item-info-date">
        {checkInDate && (
          <span>Available to Check In: {renderDate(checkInDate)}</span>
        )}
      </div>
      <br />
    </div>
  );
}
