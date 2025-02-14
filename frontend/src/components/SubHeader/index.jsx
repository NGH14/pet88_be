import React, { useState } from 'react';
import { Avatar, Image } from 'antd';

import { Menu, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useEffect } from 'react';
import ChangeLanguage from '../ChangeLanguage/index';
import { useLocation, NavLink, useNavigate } from 'react-router';
import { UserAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import useScrollPosition from './../../hooks/useScrollPosition';

import { SubHeader } from './style.js';

function SubNavBar() {
	const locate = useLocation();
	const navigate = useNavigate();
	// const { user, SignOut } = UserAuth();
	const { t, i18n } = useTranslation();
	const [navBg, setNavBg] = useState(false);
	const scrollPosition = useScrollPosition();

	useEffect(() => {
		!scrollPosition > 0 ? setNavBg(false) : setNavBg(true);
	}, [scrollPosition]);

	const handleSignOut = async (e) => {
		e.preventDefault();
		try {
			// await SignOut();
			navigate('/sign-in');
		} catch (error) {
			console.log(error);
		}
	};

	// REMOVE: This is just for testing purposes
	let user = {};
	user.role = 'admin';

	// const menu = (
	// 	<Menu
	// 		items={[
	// 			user?.role === 'admin' && {
	// 				key: '3',
	// 				label: <NavLink to={'/admin'}>{t('Admin Centre')}</NavLink>,
	// 			},
	// 			{
	// 				key: '1',
	// 				label: <NavLink to='/account'>{t('Account')}</NavLink>,
	// 			},
	// 		]}
	// 	/>
	// );
	return (
		<SubHeader className="mobileHidden">
			<ChangeLanguage />
		</SubHeader>
	);
}

export default SubNavBar;
