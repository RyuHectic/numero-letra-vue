import { Notify, QNotifyCreateOptions } from 'quasar'

const localPosition = 'top-right'
const localTimeout = 2000

export default {
  showSuccessNotification(message: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center',
    timeout?: number) {
    Notify.create({
      message,
      html: true,
      color: 'positive',
      icon: 'check',
      iconSize: '32px',
      position: position === undefined ? localPosition : position,
      timeout: timeout === undefined ? localTimeout : timeout,
      actions: [{ icon: 'close', color: 'white' }]
    })
  },
  showErrorNotification(message = 'There was an error with your request',
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center',
    timeout?: number) {
    Notify.create({
      message,
      html: true,
      color: 'negative',
      icon: 'error',
      iconSize: '32px',
      position: position === undefined ? localPosition : position,
      timeout: timeout === undefined ? localTimeout : timeout,
      actions: [{ icon: 'close', color: 'white' }]
    })
  },
  showWarningNotification(message: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center',
    timeout?: number) {
    Notify.create({
      message,
      html: true,
      color: 'warning',
      icon: 'warning',
      iconSize: '32px',
      position: position === undefined ? localPosition : position,
      timeout: timeout === undefined ? localTimeout : timeout,
      actions: [{ icon: 'close', color: 'white' }]
    })
  },
  showNotification(notification: QNotifyCreateOptions) {
    Notify.create(notification)
  },
  showDeleteNotification(message: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center',
    timeout?: number) {
    Notify.create({
      message,
      html: true,
      color: 'negative',
      icon: 'delete',
      iconSize: '32px',
      position: position === undefined ? localPosition : position,
      timeout: timeout === undefined ? localTimeout : timeout,
      actions: [{ label: 'Eliminar', color: 'yellow' }]
    })
  }
}
