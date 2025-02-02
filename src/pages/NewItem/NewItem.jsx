import { useState } from "react"
import styles from './NewItem.module.css'
import ItemForm from "../../components/ItemForm/ItemForm"

const NewItem = ({handleAddItem}) => {
  const [itemForm, setItemForm] = useState({
    name: '',
    type: '',
    desc: '',
    url: '',
    img: '',
    purchased: false,
  })

  const handleChange = ({ target }) => {
    setItemForm({ ...itemForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		handleAddItem(itemForm)
  }

  return (
    <main className={styles.container}>
      <ItemForm itemForm={itemForm} handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  )
}

export default NewItem