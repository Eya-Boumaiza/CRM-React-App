
import './Topbar.css'
import Logo from './logo-Mobile-Snap.png';
import AvatarImg from './avatar.jpg'
import {Language, NotificationsNone,Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
              <span >
              <img className='logo' src={Logo}/></span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <Language/>
              </div>

              <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                  <Settings/>
              </div>

              <img src={AvatarImg} alt="" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}
