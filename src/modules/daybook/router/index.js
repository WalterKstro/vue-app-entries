export default {
  name: 'daybook',
  component: () => import('../../daybook/pages/Home.vue'),
  children: [
    {
      path: '',
      name: 'entry-no-selected',
      component: () => import('../views/NoEntrySelected.vue'),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('../views/EntryView.vue'),
    }
  ]
}