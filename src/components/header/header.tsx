import React, { FC, useEffect, useState, useMemo, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Content, DropdownItemsData, DropdownItems, NavText, Row } from '..'
import { AuthCreators, State } from '../../store'
import { User } from '../../services'
import { Icon, IconName } from '../icon'
import { Column } from '../column'

import { HeaderProps } from './header.types'
import { useStyle } from './header.styles'

export const Header: FC<HeaderProps> = ({
  className = '',
  isLoggedIn,
  ...props
}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const classes = useStyle()
  const { user } = useSelector((state: State) => ({
    user: state.auth.user
  }))
  const [email, changeEmail] = useState('')
  const isBackgroundClass = isLoggedIn ? classes.filledBackground : ''

  const goToLogin = () => {
    history.push('/')
  }

  const handleNavigateToList = () => {
    history.push('/list')
  }

  const handleOnLogout = useCallback(() => {
    dispatch(AuthCreators.resetLogout())
    history.push('/')
  }, [])

  const handleOnChangePassword = useCallback(() => {
    history.push('/change-password')
  }, [])

  const data: DropdownItemsData = useMemo(
    () => [
      {
        id: '1',
        value: 'Change Password',
        name: 'Change Password',
        nameTx: 'header.changePassword',
        onClick: handleOnChangePassword
      },
      {
        id: '2',
        value: 'Logout',
        name: 'Logout',
        nameTx: 'header.logout',
        onClick: handleOnLogout
      }
    ],
    [handleOnChangePassword, handleOnLogout]
  )

  const getIsActive = (navPath: string) => pathname === navPath
  const getActivePreset = (navPath: string) =>
    getIsActive(navPath) ? 'bodyBold' : 'body'

  useEffect(() => {
    const isUser = user && Object.keys(user).length

    if (isUser) {
      const u = user as User
      try {
        changeEmail(u.displayName || u.email)
      } catch (e) {
        changeEmail(u.email)
      }
    }
  }, [user])

  return (
    <Column className={`${isBackgroundClass}`} fullWidth>
      <Content {...props} className={`${className} ${classes.header}`}>
        <Row className={classes.logo} onClick={handleNavigateToList}>
          <Icon name={IconName.LOGO} width={130} height={48} />
        </Row>
        {/* TODO: rewrite - two components */}
        {isLoggedIn ? (
          <Row>
            <NavText
              className={`${classes.navText} ${classes.navContainer}`}
              text="list"
              tx="list.title"
              preset={getActivePreset('/list')}
              active={getIsActive('/list')}
              onClick={handleNavigateToList}
            />
            <Row>
              <DropdownItems
                disabled={true}
                className={classes.menu}
                data={data}
              >
                <NavText
                  className={`${classes.navText} ${classes.complexContainer}`}
                  preset={getActivePreset('/profile')}
                  text={email}
                  color="inactive"
                />
                <Icon
                  className={classes.icon}
                  name={IconName.USER}
                  width={22}
                  height={22}
                />
              </DropdownItems>
            </Row>
          </Row>
        ) : (
          <Row>
            <NavText
              active
              className={classes.navText}
              text="Login"
              tx="login.title"
              preset="bodyBold"
              color="darkBlue"
              onClick={goToLogin}
            />
          </Row>
        )}
      </Content>
    </Column>
  )
}
