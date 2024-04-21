export default function Button(props) {
  return (
    <button
      className={`${props.className} py-2 px-6 text-base text-white text- rounded-full  bg-strongGreen hover:bg-hoverGreen transition-all duration-200 md:block  `}
    >
      {props.children}
    </button>
  );
}
