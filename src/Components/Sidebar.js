import './Sidebar.css'
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar({openSideBar}) {
  const [openDash,setOpenDash]=useState(false);
  const [openPages,setOpenPages]=useState(false);
  const [openApp,setOpenApp]=useState(false);
  const [openUpload,setOpenUpload]=useState(false);
  const [openUtility,setOpenUtility]=useState(false);
  const setDash=()=>{
    setOpenDash(!openDash);
    setOpenPages(false);
    setOpenApp(false);
    setOpenUpload(false);
    setOpenUtility(false);
  }
  const setPage=()=>{
    setOpenDash(false);
    setOpenPages(!openPages);
    setOpenApp(false);
    setOpenUpload(false);
    setOpenUtility(false);
  }
  const setApp=()=>{
    setOpenDash(false);
    setOpenPages(false);
    setOpenApp(!openApp);
    setOpenUpload(false);
    setOpenUtility(false);
  }
  const setUpload=()=>{
    setOpenDash(false);
    setOpenPages(false);
    setOpenApp(false);
    setOpenUpload(!openUpload);
    setOpenUtility(false);
  }
  const setUtility=()=>{
    setOpenDash(false);
    setOpenPages(false);
    setOpenApp(false);
    setOpenUpload(false);
    setOpenUtility(!openUtility);
  }
  return (<div className="sidebar opensidebar">
    <ul className='sidebar-menu'onClick={setDash}><ShowChartIcon/><span>Dashboards</span>{openDash?<KeyboardArrowDownIcon />:<KeyboardArrowRightIcon/>}
    {openDash &&(<>
    <li className='sidebar-submenu'>Defualt</li>
    <li className='sidebar-submenu'>Multipurpose</li>
    <li className='sidebar-submenu'>Affiliate</li>
    </>
    )}
    </ul>
    <ul className='sidebar-menu'onClick={setPage}><GridViewIcon/><span>Pages</span>{openPages?<KeyboardArrowDownIcon />:<KeyboardArrowRightIcon/>}
    {openPages &&(<>
    <li className='sidebar-submenu'>Account</li>
    <li className='sidebar-submenu'>Authentication</li>
    <li className='sidebar-submenu'>Error</li>
    <li className='sidebar-submenu'>Pricing</li>
    </>
    )}
    </ul>
    <ul className='sidebar-menu'onClick={setApp}><LanguageIcon/><span>Application</span>{openApp?<KeyboardArrowDownIcon />:<KeyboardArrowRightIcon/>}
    {openApp &&(<>
    <li className='sidebar-submenu'>Application1</li>
    <li className='sidebar-submenu'>Application2</li>
    <li className='sidebar-submenu'>Application3</li>
    </>
    )}
    </ul>
    <ul className='sidebar-menu'onClick={setUpload}><CloudUploadIcon/><span>Upload</span>{openUpload?<KeyboardArrowDownIcon />:<KeyboardArrowRightIcon/>}
    {openUpload &&(<>
    <li className='sidebar-submenu'>Report1</li>
    <li className='sidebar-submenu'>Report2</li>
    <li className='sidebar-submenu'>Report3</li>
    </>
    )}
    </ul>
    <ul className='sidebar-menu'onClick={setUtility}><SettingsIcon/><span>Utilities</span>{openUtility?<KeyboardArrowDownIcon />:<KeyboardArrowRightIcon/>}
    {openUtility &&(<>
    <li className='sidebar-submenu'>Setting1</li>
    <li className='sidebar-submenu'>Setting2</li>
    <li className='sidebar-submenu'>Setting3</li>
    </>
    )}
    </ul>

  </div>);
}

export default Sidebar;
