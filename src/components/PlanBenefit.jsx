import Icon from './Icon'

const PlanBenefit = ({ iconType, children }) => {
  return (
    <li className="flex items-center gap-16">
      <Icon type={iconType} style="w-12 h-12" />
      <p className="text-2xl 2xl:text-[4rem]">{children}</p>
    </li>
  )
}

export default PlanBenefit
