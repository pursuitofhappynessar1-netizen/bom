import { Collection } from '../../types/product';

interface CollectionTileProps {
  collection: Collection;
  onActionClick?: () => void;
}

export default function CollectionTile({
  collection,
  onActionClick,
}: CollectionTileProps) {
  const statusConfig = {
    available: {
      label: 'متاح',
      bgColor: 'bg-green-500',
      buttonLabel: 'اكتشف',
    },
    'coming-soon': {
      label: 'قريباً',
      bgColor: 'bg-yellow-500',
      buttonLabel: 'أُعلمني',
    },
    'sold-out': {
      label: 'نفذ',
      bgColor: 'bg-gray-500',
      buttonLabel: 'غير متاح',
    },
  };

  const config = statusConfig[collection.status];
  const isDisabled = collection.status === 'sold-out';

  return (
    <div
      className="group relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
      style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)' }}
    >
      <img
        src={collection.image}
        alt={collection.name}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
          isDisabled ? 'grayscale' : ''
        }`}
      />

      <div
        className={`absolute inset-0 ${
          isDisabled
            ? 'bg-black/40'
            : 'bg-gradient-to-b from-transparent via-transparent to-black/60'
        } transition-all duration-300`}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex items-center gap-3 mb-4 justify-end">
          <span
            className={`${config.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {config.label}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-2 product-name">{collection.name}</h3>
        <p className="text-sm text-gray-200 mb-6 line-clamp-2 text-center">
          {collection.descriptionAr}
        </p>

        {collection.status === 'available' && collection.id !== 'bracelets' && (
          <button
            onClick={onActionClick}
            className="self-start px-6 py-2 font-semibold rounded-lg transition-all duration-300 bg-[#e7ddcc] text-[#243247] hover:bg-white transform hover:scale-105 hover:shadow-lg"
          >
            {config.buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}
