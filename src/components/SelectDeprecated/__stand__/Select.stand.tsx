import { createStand } from '##/stand/standConfig';

export default createStand({
  title: 'Select',
  id: 'Select',
  group: 'components',
  description: 'Выпадающий список. Позволяет выбрать один вариант.',
  version: '1.1.0',
  status: 'deprecated',
  /* cspell:disable-next-line */
  sandbox: 'select-ixtbcl',
  alias: ['поле', 'ввод', 'выбор', 'список', 'лист'],
  figma:
    'https://www.figma.com/embed?embed_host=uikit.consta.design&url=https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=9701%3A190445',
  order: 10,
});
