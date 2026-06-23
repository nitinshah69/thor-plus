import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Package, Users, DollarSign, Clock, Search, Filter, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

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
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('ayurpeak_orders') || '[]');
    setOrders(savedOrders);
  }, []);

  const updateStatus = (id: string, newStatus: string) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('ayurpeak_orders', JSON.stringify(updatedOrders));
  };

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">System Online</span>
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
              <div className="flex gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input 
                    type="text" 
                    placeholder="Search orders..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2 text-sm text-on-surface-variant">
                  <Filter className="w-4 h-4" /> Filter
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
                      <td colSpan={7} className="p-8 text-center text-on-surface-variant">
                        No orders found. Once users check out, their data will appear here.
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
                          <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                            order.status === 'Completed' ? 'bg-green-100 text-green-700' :
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
                          <div className="flex items-center justify-center gap-2">
                            {order.status === 'Pending' && (
                              <button 
                                onClick={() => updateStatus(order.id, 'Completed')}
                                className="text-xs bg-[#25D366] text-white px-3 py-1 rounded hover:bg-[#20BE5C] transition-colors font-bold"
                              >
                                Complete
                              </button>
                            )}
                            <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                              <ChevronRight className="w-5 h-5" />
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
