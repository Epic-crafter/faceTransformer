import { Check, Star } from "lucide-react";

// Define the types for the props
interface ListProps {
  style: "star" | "step" | "tick" | "number" | "alphabet" | "dot"; // Allowed styles
  data: Array<string | { value: string }>; // Array of strings or objects with a 'value' key
}

const List: React.FC<ListProps> = ({ style, data }) => {
  return (
    <>
      {data &&
        data.map((txt, index) => (
          <div
            key={index}
            className="mt-2 lg:mt-4 flex lg:gap-5 md:gap-3 gap-2"
          >
            <span>
              {style === "star" && <Star className="text-[#FFD700]" />}
              {style === "step" && (
                <span className="whitespace-nowrap text-primary text-xl font-bold">
                  Step: {index + 1}&nbsp;&nbsp;
                </span>
              )}
              {style === "tick" && <Check className="text-primary" />}
              {style === "number" && (
                <span className="font-semibold">{index + 1}.</span>
              )}
              {style === "alphabet" && (
                <span className="font-semibold">
                  {String.fromCharCode(97 + index)}.
                </span>
              )}
              {style === "dot" && <span>●</span>}
            </span>
            <p className="font-medium text-md md:text-lg lg:text-xl">
              {typeof txt === "string" ? txt : txt.value}
            </p>
          </div>
        ))}
    </>
  );
};

export default List;
