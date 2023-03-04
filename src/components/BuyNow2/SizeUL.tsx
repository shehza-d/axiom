export default function SizeUL() {
  return (
    <ul className="flex gap-2 ">
      <li>
        <input
          type="radio"
          id="size-small"
          name="size"
          value="size-small"
          className="peer hidden"
          required
        />
        <label
          htmlFor="size-small"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-4 peer-checked:border-gray-900 peer-checked:text-slate-800"
        >
          <span className="text-lg font-light">S</span>
        </label>
      </li>
      <li>
        <input
          type="radio"
          id="size-medium"
          name="size"
          value="size-medium"
          className="peer hidden"
        />
        <label
          htmlFor="size-medium"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-4 peer-checked:border-gray-900 peer-checked:text-slate-800"
        >
          <span className=" text-lg font-light">M</span>
        </label>
      </li>
      <li>
        <input
          type="radio"
          id="size-large"
          name="size"
          value="size-large"
          className="peer hidden"
        />
        <label
          htmlFor="size-large"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-4 peer-checked:border-gray-900 peer-checked:text-slate-800"
        >
          <span className=" text-lg font-light">L</span>
        </label>
      </li>
      <li>
        <input
          type="radio"
          id="size-extra-large"
          name="size"
          value="size-extra-large"
          className="peer hidden"
        />
        <label
          htmlFor="size-extra-large"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-4 peer-checked:border-gray-900 peer-checked:text-slate-800"
        >
          <span className=" text-lg font-light">XL</span>
        </label>
      </li>
    </ul>
  );
}
