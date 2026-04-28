MONGO_URI=mongodb://VaishDB:vaish123@ac-205u0w1-shard-00-00.0stwwzo.mongodb.net:27017,ac-205u0w1-shard-00-01.0stwwzo.mongodb.net:27017,ac-205u0w1-shard-00-02.0stwwzo.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-4r4mlg-shard-0&authSource=admin&retryWrites=true&w=majority
PORT=5000
new
mongodb+srv://VaishDB:vaish123@cluster0.0stwwzo.mongodb.net/examdb?retryWrites=true&w=majority
cd backend
npm install
create.env 
MONGO_URI=your_mongodb_url
PORT=5000
npm run dev
frontend
cd frontend
npm install
npm run dev
http://localhost:5173
adding new cruds
in models:
serialNumber: {
  type: String,
  required: true
}
frontend
<label>Serial Number</label>
<input
  name="serialNumber"
  value={formData.serialNumber}
  onChange={handleChange}
  required
/>
at top
const [formData, setFormData] = useState({
  name: "",
  description: "",
  category: "",
  serialNumber: ""
});
in home page <p>Serial Number: {item.serialNumber}</p>
git hub 
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin <repo-link>
git push -u origin main
railway build command npm install
start command npm start
environment variable MONGO_URI=your_mongodb_url
PORT=5000

