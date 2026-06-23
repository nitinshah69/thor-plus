import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Package, Users, DollarSign, Clock, Search, Filter, Trash2, CheckCircle, XCircle, Download, LockKeyhole } from 'lucide-react';

interface Order {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  date: string;
  status: string;
  total: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Check authentication status on load
  useEffect(() => {
    const authStatus = localStorage.getItem('ayurpeak_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const savedOrders = JSON.parse(localStorage.getItem('ayurpeak_orders') || '[]');
      setOrders(savedOrders);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (loginEmail === 'admin@gmail.com' && loginPassword === 'password123') {
      setIsAuthenticated(true);
      localStorage.setItem('ayurpeak_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ayurpeak_admin_auth');
  };

  const updateStatus = (id: string, newStatus: string) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('ayurpeak_orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (id: string) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.id !== id);
      setOrders(updatedOrders);
      localStorage.setItem('ayurpeak_orders', JSON.stringify(updatedOrders));
    }
  };

  const exportCSV = () => {
    const headers = ['Order ID', 'Customer Name', 'Email', 'Address', 'City', 'Date', 'Status', 'Total'];
    const csvContent = [
      headers.join(','),
      ...orders.map(o => `"${o.id}","${o.firstName} ${o.lastName}","${o.email}","${o.address}","${o.city}","${new Date(o.date).toLocaleDateString()}","${o.status}","${o.total}"`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `ayurpeak_orders_${new Date().toLocaleDateString()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-surface-container flex items-center justify-center p-4">
          <div className="bg-surface p-8 rounded-2xl shadow-xl border border-outline-variant w-full max-w-md">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <LockKeyhole className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-display-sm text-center text-on-surface mb-2">Admin Access</h1>
            <p className="text-center text-on-surface-variant mb-8 text-sm">Secure Portal for AyurPeak Team</p>
            
            {loginError && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200 mb-6 text-center">
                {loginError}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-1 block">Email Address</label>
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@gmail.com" 
                  className="w-full bg-surface-container-low p-4 rounded-lg border border-outline-variant focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-1 block">Password</label>
                <input 
                  type="password" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-surface-container-low p-4 rounded-lg border border-outline-variant focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary h-14 rounded-lg uppercase tracking-widest text-sm font-bold shadow-md hover:opacity-90 transition-opacity mt-4">
                Login to Dashboard
              </button>
            </form>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-surface-container min-h-screen">
        {/* Admin Header */}
        <div className="bg-primary text-on-primary py-8 px-container-padding shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-display-sm font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-on-primary/80 text-body-md mt-1">Manage orders and customer data securely.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide hidden sm:inline">System Online</span>
              </div>
              <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium border border-white/20">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-container-padding py-12">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant font-medium">Total Orders</p>
                <p className="text-2xl font-bold text-on-surface">{orders.length}</p>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant font-medium">Revenue</p>
                <p className="text-2xl font-bold text-on-surface">₹{(orders.length * 2999).toLocaleString()}</p>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant font-medium">Customers</p>
                <p className="text-2xl font-bold text-on-surface">{new Set(orders.map(o => o.email)).size}</p>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant font-medium">Pending</p>
                <p className="text-2xl font-bold text-on-surface">{orders.filter(o => o.status === 'Pending').length}</p>
              </div>
            </div>
          </div>

          {/* Orders Table Area */}
          <div className="bg-surface rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-title-lg font-bold text-on-surface">Recent Orders</h2>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64 min-w-[200px]">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input 
                    type="text" 
                    placeholder="Search orders..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <button 
                  onClick={exportCSV}
                  disabled={orders.length === 0}
                  className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg hover:bg-surface-container-high hover:border-primary transition-colors flex items-center gap-2 text-sm text-on-surface disabled:opacity-50 font-medium"
                >
                  <Download className="w-4 h-4" /> Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <th className="p-4 font-bold">Order ID</th>
                    <th className="p-4 font-bold">Customer</th>
                    <th className="p-4 font-bold">Location</th>
                    <th className="p-4 font-bold">Date</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold">Total</th>
                    <th className="p-4 font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-12 text-center text-on-surface-variant">
                        <div className="flex flex-col items-center gap-3">
                          <Package className="w-12 h-12 text-outline" />
                          <p>No orders found. Once users check out, their data will appear here.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order, idx) => (
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={order.id} 
                        className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors"
                      >
                        <td className="p-4 font-mono text-sm text-primary font-bold">{order.id}</td>
                        <td className="p-4">
                          <div className="font-bold text-on-surface">{order.firstName} {order.lastName}</div>
                          <div className="text-xs text-on-surface-variant mt-1">{order.email}</div>
                        </td>
                        <td className="p-4 text-sm">
                          <div className="text-on-surface">{order.city}</div>
                          <div className="text-xs text-on-surface-variant mt-1 truncate max-w-[150px]">{order.address}</div>
                        </td>
                        <td className="p-4 text-sm text-on-surface-variant">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 uppercase tracking-wider ${
                            order.status === 'Completed' ? 'bg-[#DCF8C6] text-[#075E54]' :
                            order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {order.status === 'Completed' ? <CheckCircle className="w-3 h-3"/> : 
                             order.status === 'Cancelled' ? <XCircle className="w-3 h-3"/> : 
                             <Clock className="w-3 h-3"/>}
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 font-bold text-on-surface">{order.total}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-3">
                            {order.status === 'Pending' && (
                              <button 
                                onClick={() => updateStatus(order.id, 'Completed')}
                                className="text-xs bg-[#25D366] text-white px-3 py-1.5 rounded shadow-sm hover:bg-[#20BE5C] active:scale-95 transition-all font-bold"
                              >
                                Complete
                              </button>
                            )}
                            <button 
                              onClick={() => deleteOrder(order.id)}
                              className="p-1.5 text-on-surface-variant hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Delete Order"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
