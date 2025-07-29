import type { AssetAccount } from "../models/Budget";

type AssetsViewProps = {
    assets: AssetAccount[];
    onUpdate: (updatedAssetAccounts: AssetAccount[]) => void;
};


const AssetsView = ({ assets }: AssetsViewProps) => {
    return (
        <div>
            <h2>Assets</h2>
            <ul>
                {assets.map((asset) => (
                    <li key={asset.name}>
                        <strong>{asset.name}</strong> ({asset.type})<br />
                        Balance: ${asset.currentBalance.toLocaleString()}<br />
                        Include in Net Worth: {asset.includeInNetWorth ? "Yes" : "No"}<br />
                        {asset.autoUpdate !== undefined && (
                            <>Auto Update: {asset.autoUpdate ? "Yes" : "No"}<br /></>
                        )}
                        {asset.notes && (
                            <>Notes: {asset.notes}<br /></>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssetsView;