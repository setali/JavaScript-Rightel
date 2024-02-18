const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['ADD_TASK', 'EDIT_TASK', 'DELETE_TASK', 'VIEW_TASK_LIST']
}

function checkPermission (permission) {
  return !permission || user.permissions.includes(permission)
}

export default Component => props =>
  checkPermission(props.permission) && <Component {...props} />

// export default function ACL (Component) {
//     return function MyACL (props) {
//       return checkPermission(props.permission) && <Component {...props} />
//     }
//   }
