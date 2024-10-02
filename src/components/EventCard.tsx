interface Props {
  name: string;
  reason: string;
  date: string;
  image: string;
}

function EventCard({ name, reason, date, image }: Props) {
  return (
    <div className="flex gap-3 p-2 rounded-md border border-lightGrey/20">
      <div className="w-10 h-10 relative rounded-md">
        <img
          src={image}
          alt="employee"
          className="top-0 left-0 w-full h-full object-cover absolute rounded-md"
        />
      </div>
      <div className="w-full">
        <h4 className="font-lato font-bold text-[15px] text-darkGrey -mb-[5px]">
          {name}
        </h4>
        <div className="w-full flex items-center justify-between">
          <p className="font-lato font-normal text-[10px] text-darkGrey">
            {reason}
          </p>
          <p className="font-lato font-normal text-[10px] text-lightGrey py-1 px-2 rounded-md">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
