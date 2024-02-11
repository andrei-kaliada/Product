import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface IProps {
	className?: string
}

const Navbar: FC<IProps> = ({ className }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
					Main
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					About
				</AppLink>
			</div>
		</div>
	)
}

export default Navbar
