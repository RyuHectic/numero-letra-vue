import { useQuasar } from 'quasar'
import { GetUsers, ILoginRequest, ILoginResponse, IUserDTO, IUserResponse, User } from 'src/app/core/users'
import { container } from 'src/config/containers'
import { TYPES } from 'src/config/types'
import { reactive, ref } from 'vue'
import layoutHelper from 'src/helpers/layoutNotifications'
import { columns, visibleColumns, pagination } from './columnsDefinition/User'
import { useRoute, useRouter } from 'vue-router'

export const useUsers = () => {
  const $q = useQuasar()
  const route = useRoute()
  const router = useRouter()
  const getUsers = container.get<GetUsers>(TYPES.GetUsers)
  const users = ref<IUserResponse[] | undefined>([])
  const userResponse = ref<IUserResponse>()
  const loading = ref(false)
  const filter = ref<string | number | null>('')
  const titleForm = ref('')
  const showDialog = ref(false)

  const loginRequest = reactive<ILoginRequest>({
    user: '',
    password: ''
  })

  let loginResponse = reactive<ILoginResponse>({
    idUser: 0,
    completeName: '',
    user: '',
    token: ''
  })

  const formUser = ref<IUserDTO>({
    idUser: 0,
    strName: '',
    strLastName: '',
    strUser: '',
    strPassword: '',
    bitActive: true
  })

  const fetchUsers = async () => {
    loading.value = true

    try {
      users.value = await getUsers.fetchUsers()
    } catch (error) {
      NotifyError(`Ha ocurrido un error al obtener los Usuarios. ${error}`)
    }

    loading.value = false
  }

  const postUser = async () => {
    loading.value = true

    userResponse.value = await getUsers.postUser(formUser.value)

    loading.value = false
  }

  const putUser = async () => {
    loading.value = true

    userResponse.value = await getUsers.putUser(formUser.value)

    loading.value = false
  }

  const delUserById = async () => {
    loading.value = true

    userResponse.value = await getUsers.deleteUserById(formUser.value.idUser)

    loading.value = false
  }

  const doLogin = async () => {
    loading.value = true

    try {
      loginResponse = await getUsers.doLogin(loginRequest)

      // eslint-disable-next-line no-console
      console.log(loginResponse)

      getUserData(loginResponse)
    } catch (error) {
      NotifyError(`Ha ocurrido un error: ${error}`)
    }

    loading.value = false
  }

  const getUserData = async (users: ILoginResponse) => {
    if (users.idUser !== 0) {
      saveUserSession(users)

      successRedirect()
    } else {
      NotifyError('Ocurrio un error al inicio de sesión.')
    }
  }

  const saveUserSession = async (users: ILoginResponse) => {
    localStorage.setItem('UserSession', JSON.stringify(users))
    localStorage.setItem('usertoken', users.token)
  }

  const successRedirect = async () => {
    // Accede a la propiedad query de la ruta actual
    const redirectPath = route.query.redirect as string | undefined

    // Verifica si redirectPath es válido
    const finalRedirectPath = redirectPath || '/main/numberLetter'

    // Utiliza el valor de redirectPath o redirige a una ruta predeterminada
    await router.push({ path: finalRedirectPath })
  }

  function NotifyError(message: string|undefined) {
    layoutHelper.showErrorNotification(message)

    loading.value = false
  }

  function updateFilter(filterValue: string | number | null) {
    filter.value = filterValue
  }

  function addItem() {
    clearEdit()

    titleForm.value = 'Guardar'
    showDialog.value = true
  }

  function refreshData() {
    clearEdit()
    closeDialog()
    fetchUsers()
  }

  function clearEdit() {
    formUser.value = Object.assign({}, null)
    formUser.value.idUser = 0
    formUser.value.bitActive = true
  }

  function closeDialog() {
    if (showDialog.value) { showDialog.value = false }
  }

  function editItem(item: User) {
    clearEdit()
    formUser.value.idUser = item.idUser

    formUser.value.strName = item.strName
    formUser.value.strLastName = item.strLastName
    formUser.value.strUser = item.strUser
    formUser.value.strPassword = item.strPassword
    formUser.value.bitActive = item.bitActive

    titleForm.value = 'Actualizar'
    showDialog.value = true
  }

  function onSubmit(editedForm: IUserDTO) {
    formUser.value = Object.assign({}, editedForm)

    if (formUser.value.idUser === 0) {
      postUser()
        .then(() => {
          NotifyMessage(`El usuario se creo correctamente`)
        })
        .catch((error) => {
          NotifyError(`Ocurrió un error al crear el usuario ${editedForm.strUser}. ${error}`)
        })
    } else {
      putUser()
        .then(() => {
          NotifyMessage(`El usuario ${editedForm.strUser} se actualizó correctamente`)
        })
        .catch((error) => {
          NotifyError(`Ocurrió un error al actulizar el usuario ${editedForm.strUser}. ${error}`)
        })
    }
  }

  function NotifyMessage(message: string) {
    if (userResponse.value !== undefined) {
      layoutHelper.showSuccessNotification(message)
    }

    refreshData()
  }

  function deleteNotify(item: User) {
    $q.notify({
      message: '¿Realmente deseas borrar el elemento?',
      color: 'negative',
      icon: 'delete',
      actions: [
        { label: 'Eliminar', color: 'yellow', handler: () => { deleteItem(item) } },
        { label: 'Cancelar', color: 'white', handler: () => { clearEdit() } }
      ]
    })
  }

  function deleteItem(item: User) {
    formUser.value.idUser = item.idUser

    delUserById()
      .then(() => {
        NotifyMessage(`El usuario ${item.strUser} se elimino correctamente`)
      })
      .catch((error) => {
        NotifyError(`Ocurrio un error al eliminar el usuario ${item.strUser}. ${error}`)
      })
  }

  const logOut = () => {
    window.localStorage.clear()
    goLoginPage()
  }

  const goLoginPage = () => router.push({ name: 'login' })

  return {
    users,
    userResponse,
    loading,
    columns,
    visibleColumns,
    pagination,
    filter,
    titleForm,
    showDialog,
    formUser,
    loginRequest,
    fetchUsers,
    updateFilter,
    addItem,
    editItem,
    deleteNotify,
    onSubmit,
    doLogin,
    logOut,
  }
}
