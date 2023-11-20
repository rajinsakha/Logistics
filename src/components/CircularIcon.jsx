
const CircularIcon = ({Icon, className, iconStyle}) => {
  return (
    <div className={`flex items-center justify-center w-14 h-14 rounded-[100px] bg-white box-shadow cursor-pointer ${className}`}>
    <Icon fontSize={28} className={`text-sim-blue ${iconStyle}`} />
</div>
  )
}


export default CircularIcon
