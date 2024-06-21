/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetLog, ILogDTO, ILogResponse } from 'src/app/core/logs'
import { container } from 'src/config/containers'
import { TYPES } from 'src/config/types'
import { computed, reactive, ref, watch } from 'vue'
import layoutHelper from 'src/helpers/layoutNotifications'
import { columns, pagination, visibleColumns } from './columnsDefinition/Log'
import { toLetter } from 'src/helpers/Converter'

export const useLog = () => {
  const getLog = container.get<GetLog>(TYPES.GetLog)
  const loading = ref(false)
  const log = ref<ILogResponse[] | undefined>([])
  const logResponse = ref<ILogResponse>()
  const myNumber = ref<number>(0)
  const myRefInputNumber = ref<any>(null)
  const formLog = reactive<ILogDTO>({
    intNumber: '0',
    strNumberLetter: ''
  })

  const fetchLog = async () => {
    loading.value = true

    try {
      log.value = await getLog.fetchLog()
    } catch (error) {
      NotifyError(`Ha ocurrido un error al obtener el Log de movimientos. ${error}`)
    }

    loading.value = false
  }

  const postLog = async () => {
    loading.value = true

    logResponse.value = await getLog.postLog(formLog)

    loading.value = false
  }

  function onSubmit() {
    formLog.intNumber = myNumberWithSeparator.value // myNumber.value.toString()
    formLog.strNumberLetter = myText.value

    postLog()
      .then(() => {
        NotifyMessage(`El log ${formLog.intNumber} se generó correctamente`)
      })
      .catch((error) => {
        NotifyError(`Ocurrió un error al generar el log ${formLog.intNumber}. ${error}`)
      })
  }

  const myText = computed(() => toLetter(new Intl.NumberFormat('en-US').format(myNumber.value).toString()))

  const myNumberWithSeparator = computed(() => new Intl.NumberFormat('en-US').format(myNumber.value))

  watch(() => myNumber.value, (currentValue, oldValue) => {
    if (currentValue < 0) {
      myNumber.value = 0
      NotifyError('No se permiten valores negativos.')
      setBlurOnMyNumber()
    }

    if (currentValue.toString().length > 30) {
      myNumber.value = oldValue
      NotifyError('Sobrepasó el número maximo permitido.')

      setBlurOnMyNumber()
    }
  })

  const setBlurOnMyNumber = () => { if (myRefInputNumber.value) { myRefInputNumber.value.focus() } }

  function NotifyError(message: string|undefined) {
    layoutHelper.showErrorNotification(message)

    loading.value = false
  }

  function NotifyMessage(message: string) {
    layoutHelper.showSuccessNotification(message)
  }

  return {
    log,
    loading,
    columns,
    pagination,
    visibleColumns,
    formLog,
    myNumber,
    myRefInputNumber,
    myText,
    myNumberWithSeparator,
    fetchLog,
    onSubmit,
    NotifyError,
    NotifyMessage,
  }
}
