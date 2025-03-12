import { useState, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const initialDistrictData = [
  { name: 'Ernakulam', adulteration: 45 },
  { name: 'Trivandrum', adulteration: 32 },
  { name: 'Kozhikode', adulteration: 28 },
  { name: 'Kannur', adulteration: 20 },
];

const initialStateSummary = [
  { name: 'Safe', value: 120 },
  { name: 'Unsafe', value: 45 },
];

const COLORS = ['#4CAF50', '#F44336'];

const getRandomData = () =>
  initialDistrictData.map((item) => ({
    ...item,
    adulteration: Math.floor(Math.random() * 50) + 10,
  }));

const getRandomStateSummary = () => [
  { name: 'Safe', value: Math.floor(Math.random() * 150) + 50 },
  { name: 'Unsafe', value: Math.floor(Math.random() * 100) + 20 },
];

const getRandomInspectionData = () => [
  { name: 'Completed', value: Math.floor(Math.random() * 100) + 50 },
  { name: 'Pending', value: Math.floor(Math.random() * 50) + 20 },
];

export function MinisterDashboard() {
  const [view, setView] = useState('bar');
  const [districtData, setDistrictData] = useState(initialDistrictData);
  const [stateSummary, setStateSummary] = useState(initialStateSummary);
  const [inspectionData, setInspectionData] = useState(getRandomInspectionData());

  useEffect(() => {
    const interval = setInterval(() => {
      setDistrictData(getRandomData());
      setStateSummary(getRandomStateSummary());
      setInspectionData(getRandomInspectionData());
      setView((prev) => (prev === 'bar' ? 'line' : prev === 'line' ? 'pie' : 'bar'));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-white text-gray-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Minister Dashboard</h1>
        <button
          onClick={() => setView(view === 'bar' ? 'line' : view === 'line' ? 'pie' : 'bar')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Toggle Chart
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Adulteration by District</h2>
          <ResponsiveContainer width="100%" height={300}>
            {view === 'bar' ? (
              <BarChart data={districtData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="adulteration" fill="#3B82F6" barSize={50} />
              </BarChart>
            ) : view === 'line' ? (
              <LineChart data={districtData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="adulteration" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={districtData} dataKey="adulteration" nameKey="name" outerRadius={120}>
                  {districtData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Statewide Safety Summary</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={stateSummary} dataKey="value" nameKey="name" outerRadius={120}>
                {stateSummary.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Inspection Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={inspectionData} dataKey="value" nameKey="name" outerRadius={120}>
                {inspectionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}


