const { Package, PackagePlus, Compass, Handshake, Users, Leaf, ShieldCheck, Scale, MapPin, HeartHandshake, Twitter, Facebook, Instagram } = LucideReact;

const renderIcon = (component, containerId, props = {}) => {
  const e = React.createElement;
  ReactDOM.render(e(component, props), document.getElementById(containerId));
}

// Render main icons
renderIcon(Package, 'logo-icon', { size: 28, className: 'text-[--c-purple]' });
renderIcon(PackagePlus, 'step1-icon', { size: 40 });
renderIcon(Handshake, 'step2-icon', { size: 40 });
renderIcon(Compass, 'step3-icon', { size: 40 });
renderIcon(Users, 'feat6-icon', {size: 32});
renderIcon(Leaf, 'feat2-icon', {size: 32});
renderIcon(ShieldCheck, 'feat3-icon', {size: 32});
renderIcon(Scale, 'feat4-icon', {size: 32});
renderIcon(MapPin, 'feat5-icon', {size: 32});
renderIcon(HeartHandshake, 'feat1-icon', {size: 32});

// Render social icons in footer
const SocialIcons = () => {
  return (
    <React.Fragment>
      <a href="#" className="hover:text-[--c-pink] transition-colors"><Twitter size={24} /></a>
      <a href="#" className="hover:text-[--c-pink] transition-colors"><Facebook size={24} /></a>
      <a href="#" className="hover:text-[--c-pink] transition-colors"><Instagram size={24} /></a>
    </React.Fragment>
  );
}
ReactDOM.render(<SocialIcons />, document.getElementById('social-icons'));


// dashboard Admin
const { LayoutDashboard, Users, Map, Mail, Settings, LogOut, UserPlus, DollarSign, Package, Route, FileCheck, FileBarChart } = LucideReact;

const renderIcon = (component, containerId, props = {}) => {
  const e = React.createElement;
  ReactDOM.render(e(component, props), document.getElementById(containerId));
}

// Sidebar Icons
renderIcon(LayoutDashboard, 'icon-dashboard');
renderIcon(Users, 'icon-users');
renderIcon(Map, 'icon-trips');
renderIcon(Mail, 'icon-requests');
renderIcon(Settings, 'icon-settings');

// Header Icons
renderIcon(LogOut, 'icon-logout');

// Stat Icons
renderIcon(Users, 'stat-icon1', {size: 24});
renderIcon(Route, 'stat-icon2', {size: 24});
renderIcon(Package, 'stat-icon3', {size: 24});
renderIcon(DollarSign, 'stat-icon4', {size: 24});

// Activity Icons
renderIcon(UserPlus, 'act-icon1', {size: 16});
renderIcon(Route, 'act-icon2', {size: 16});
renderIcon(Package, 'act-icon3', {size: 16});

// Quick Action Icons
renderIcon(UserPlus, 'quick-icon1', {size: 20});
renderIcon(FileCheck, 'quick-icon2', {size: 20});
renderIcon(FileBarChart, 'quick-icon3', {size: 20});

const { LayoutDashboard, Users, Map, Mail, LogOut, ShieldCheck, UserCheck, UserX } = LucideReact;
const renderIcon = (component, containerId, props = {}) => ReactDOM.render(React.createElement(component, props), document.getElementById(containerId));
renderIcon(LayoutDashboard, 'icon-dashboard'); renderIcon(Users, 'icon-users'); renderIcon(Map, 'icon-trips'); renderIcon(Mail, 'icon-requests'); renderIcon(LogOut, 'icon-logout');
renderIcon(Users, 'stat-icon1', {size: 24}); renderIcon(Map, 'stat-icon2', {size: 24}); renderIcon(Mail, 'stat-icon3', {size: 24}); renderIcon(ShieldCheck, 'stat-icon4', {size: 24});
renderIcon(UserCheck, 'quick-icon1', {size: 20}); renderIcon(UserX, 'quick-icon2', {size: 20}); renderIcon(ShieldCheck, 'quick-icon3', {size: 20});

