import { AvatarFilter as Filtertype } from "@/types/avatarFilter";
import { Checkbox } from "../ui/checkbox";

interface Props {
  avatarFilter: Array<Filtertype>;
  setAvatarFilter: React.Dispatch<React.SetStateAction<Array<Filtertype>>>;
}

export default function AvatarFilter({ avatarFilter, setAvatarFilter }: Props) {
  function isActiveFilter(filterNum: Filtertype) {
    if (
      avatarFilter.includes(Filtertype.FIVE_STARS) &&
      avatarFilter.includes(Filtertype.FOUR_STARS)
    ) {
      return "px-3 py-3 aspect-square rounded-md  ";
    } else if (avatarFilter.includes(filterNum)) {
      return "px-3 py-3 aspect-square rounded-md  ";
    } else {
      return filterNum === Filtertype.FIVE_STARS
        ? "px-3 py-3 aspect-square rounded-md "
        : "px-3 py-3 aspect-square rounded-md ";
    }
  }

  function handleClick(filterNum: Filtertype) {
    if (avatarFilter.includes(filterNum)) {
      setAvatarFilter(avatarFilter.filter((a) => a !== filterNum));
    } else {
      setAvatarFilter(avatarFilter.concat(filterNum));
    }
  }

  return (
    <div className="flex gap-2">
      <Checkbox
        defaultChecked
        onClick={() => handleClick(Filtertype.FIVE_STARS)}
        className={`${isActiveFilter(
          Filtertype.FIVE_STARS
        )} + bg-yellow-600 flex items-center justify-center text-yellow-700 border border-yellow-800`}
      >
        <p>asdasd</p>✦
      </Checkbox>
      <Checkbox
        defaultChecked
        onClick={() => handleClick(Filtertype.FOUR_STARS)}
        className={`${isActiveFilter(
          Filtertype.FOUR_STARS
        )} + bg-purple-600 flex items-center justify-center text-purple-800 border border-purple-800`}
      >
        ✦
      </Checkbox>
    </div>
  );
}
