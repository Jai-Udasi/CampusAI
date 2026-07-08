function Logo({
  size = "h-12",
  className = "",
}) {
  return (
    <img
      src="/brand/campusai-logo.svg"
      alt="CampusAI"
      className={`${size} w-auto ${className}`}
    />
  );
}

export default Logo;