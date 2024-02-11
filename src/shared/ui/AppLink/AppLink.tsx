import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
	className?: string
	theme: AppLinkTheme
}

const AppLink: FC<IProps> = ({
	className,
	to,
	children,
	theme = AppLinkTheme.PRIMARY,
	...restProps
}) => {
	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...restProps}
		>
			{children}
		</Link>
	)
}

export default AppLink
